import { useEffect, useState } from "react";
import EmpForm from "../component/EmpForm";
import { getDataFromStore, saveDataToStore } from "../service/dataStoreService";

const EmpComponent = () => {
    let isShowCurrentPageView = true;
    const [empForm, setEmpForm] = useState(false);
    const [empData, setEmpData] = useState([]);
    const [editableData, setEditableData] = useState();
    const [editingId, setEditingId] = useState(null);
    const [tempData, setTempData] = useState({});
    const [searchData, setSearchData] = useState();

    const init = () => {
        let arrData = getDataFromStore();
        setEmpData(arrData);
    }

    useEffect(init, []);

    if (empForm) {
        isShowCurrentPageView = false;
    }

    const handleForm = () => {
        setEmpForm(!empForm);
    }

    const saveData = (data) => {
        setEmpForm(!empForm);
        let arr = [...empData];
        let obj = arr.find(f => f.id === data.id);
        if (obj) {
            Object.assign(obj, data);
        } else {
            arr.push(data);
        }
        setEmpData([...arr]);
        saveDataToStore(arr);
    }

    const deleteData = (id) => {
        let arr = empData.filter(f => f.id !== id);
        setEmpData(arr);
        saveDataToStore(arr);
    }

    const startEdit = (id) => {
        setEditingId(id);
        const employee = empData.find(f => f.id === id);
        setTempData(employee);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTempData(prev => ({ ...prev, [name]: value }));
    }

    const saveInlineEdit = () => {
        const updatedData = empData.map(emp => emp.id === editingId ? tempData : emp);
        setEmpData(updatedData);
        saveDataToStore(updatedData);
        setEditingId(null);
    }

    const openForm = () => {
        setEditableData({});
        handleForm();
    }

    const search = (value) => {
        setSearchData(value);
    }

    const filterData = (arr) => {
        if (searchData) {
            return arr.filter(f =>
                f.firstName.includes(searchData) ||
                f.lastName.includes(searchData) ||
                f.salary.toString() === searchData
            );
        }
        return arr;
    }

    const getGridView = (m) => (
        <div key={m.id} style={styles.gridRow}>
            {editingId === m.id ? (
                <>
                    <input name="firstName" value={tempData.firstName} onChange={handleInputChange} style={styles.input} />
                    <input name="lastName" value={tempData.lastName} onChange={handleInputChange} style={styles.input} />
                    <input name="salary" value={tempData.salary} onChange={handleInputChange} style={styles.input} />
                    <select name="gender" value={tempData.gender} onChange={handleInputChange} style={styles.input}>
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <select name="jobType" value={tempData.jobType} onChange={handleInputChange} style={styles.input}>
                        <option value="">Job Type</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Full-Time">Full-Time</option>
                    </select>
                    <button onClick={saveInlineEdit} style={{ ...styles.button, ...styles.save }}>Save</button>
                    <button onClick={() => setEditingId(null)} style={{ ...styles.button, ...styles.cancel }}>Cancel</button>
                </>
            ) : (
                <>
                    <div>{m.firstName}</div>
                    <div>{m.lastName}</div>
                    <div>{m.salary}</div>
                    <div>{m.gender}</div>
                    <div>{m.jobType}</div>
                    <button onClick={() => startEdit(m.id)} style={{ ...styles.button, ...styles.edit }}>Edit</button>
                    <button onClick={() => deleteData(m.id)} style={{ ...styles.button, ...styles.delete }}>Delete</button>
                </>
            )}
        </div>
    );

    const filterEmpData = filterData(empData);

    return (
        <div style={styles.container}>
            {isShowCurrentPageView && (
                <>
                    <h1 style={styles.title}>Employee Management</h1>
                    <div style={styles.topBar}>
                        <button onClick={openForm} style={{ ...styles.button, ...styles.primary }}>Add Employee</button>
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={e => search(e.target.value)}
                            style={{ ...styles.input, width: 200 }}
                        />
                    </div>

                    <div style={{ ...styles.gridRow, ...styles.gridHeader }}>
                        <div>First Name</div>
                        <div>Last Name</div>
                        <div>Salary</div>
                        <div>Gender</div>
                        <div>Job Type</div>
                        <div>Edit</div>
                        <div>Delete</div>
                    </div>

                    <div>
                        {filterEmpData && filterEmpData.map(getGridView)}
                    </div>
                </>
            )}

            {empForm && <EmpForm saveFnc={saveData} data={editableData} />}
        </div>
    );
}

const styles = {
    container: {
        padding: 20,
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 20,
    },
    topBar: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    input: {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: 5,
    },
    button: {
        padding: '6px 12px',
        border: 'none',
        borderRadius: 5,
        fontWeight: 'bold',
        cursor: 'pointer',
        margin: '0 2px',
    },
    primary: {
        backgroundColor: '#3498db',
        color: 'white',
    },
    edit: {
        backgroundColor: '#2980b9',
        color: 'white',
    },
    delete: {
        backgroundColor: '#e74c3c',
        color: 'white',
    },
    save: {
        backgroundColor: '#27ae60',
        color: 'white',
    },
    cancel: {
        backgroundColor: '#95a5a6',
        color: 'white',
    },
    gridRow: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: 10,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 4,
        borderBottom: '1px solid #e0e0e0',
    },
    gridHeader: {
        backgroundColor: '#dfe6e9',
        fontWeight: 'bold',
        borderRadius: 5,
    }
};

export default EmpComponent;
