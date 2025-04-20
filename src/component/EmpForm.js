import { useState, useEffect } from "react";
import axios from "axios";

const EmpForm = ({ saveFnc, data = {} }) => {
    const [firstName, setFirstName] = useState(data.firstName || '');
    const [lastName, setLastName] = useState(data.lastName || '');
    const [salary, setSalary] = useState(data.salary || '');
    const [gender, setGender] = useState(data.gender || '');
    const [jobType, setJobType] = useState(data.jobType || '');
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        axios.get("https://countriesnow.space/api/v0.1/countries")
            .then((response) => setCountries(response.data.data))
            .catch((error) => console.error("Error fetching countries:", error));
    }, []);

    const fetchStates = (country) => {
        setSelectedCountry(country);
        setStates([]);
        setCities([]);
        axios.post("https://countriesnow.space/api/v0.1/countries/states", { country })
            .then((response) => setStates(response.data.data.states))
            .catch((error) => console.error("Error fetching states:", error));
    };

    const fetchCities = (state) => {
        setSelectedState(state);
        setCities([]);
        axios.post("https://countriesnow.space/api/v0.1/countries/state/cities", {
            country: selectedCountry,
            state,
        })
            .then((response) => setCities(response.data.data))
            .catch((error) => console.error("Error fetching cities:", error));
    };

    const handleButton = () => {
        let id = data && data.id ? data.id : Math.random();
        let obj = {
            id,
            firstName,
            lastName,
            salary,
            gender,
            jobType,
            country: selectedCountry,
            state: selectedState,
            city: selectedCity,
        };
        saveFnc(obj);
    };

    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setSalary('');
        setGender('');
        setJobType('');
        setSelectedCountry('');
        setSelectedState('');
        setSelectedCity('');
        setStates([]);
        setCities([]);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Employee Form</h2>
            <table style={styles.table}>
                <tbody>
                    <tr>
                        <td style={styles.label}>First Name</td>
                        <td><input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} style={styles.input} /></td>
                    </tr>
                    <tr>
                        <td style={styles.label}>Last Name</td>
                        <td><input type="text" value={lastName} onChange={e => setLastName(e.target.value)} style={styles.input} /></td>
                    </tr>
                    <tr>
                        <td style={styles.label}>Salary</td>
                        <td><input type="text" value={salary} onChange={e => setSalary(e.target.value)} style={styles.input} /></td>
                    </tr>
                    <tr>
                        <td style={styles.label}>Gender</td>
                        <td>
                            <select value={gender} onChange={e => setGender(e.target.value)} style={styles.input}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style={styles.label}>Job Type</td>
                        <td>
                            <select value={jobType} onChange={e => setJobType(e.target.value)} style={styles.input}>
                                <option value="">Select Job Type</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Full-Time">Full-Time</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style={styles.label}>Country</td>
                        <td>
                            <select value={selectedCountry} onChange={e => fetchStates(e.target.value)} style={styles.input}>
                                <option value="">Select Country</option>
                                {countries.map((c, idx) => (
                                    <option key={idx} value={c.country}>{c.country}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style={styles.label}>State</td>
                        <td>
                            <select value={selectedState} onChange={e => fetchCities(e.target.value)} style={styles.input}>
                                <option value="">Select State</option>
                                {states.map((s, idx) => (
                                    <option key={idx} value={s.name}>{s.name}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style={styles.label}>City</td>
                        <td>
                            <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)} style={styles.input}>
                                <option value="">Select City</option>
                                {cities.map((city, idx) => (
                                    <option key={idx} value={city}>{city}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={styles.buttonRow}>
                            <button onClick={handleButton} style={{ ...styles.button, ...styles.save }}>Save</button>
                            <button onClick={handleReset} style={{ ...styles.button, ...styles.reset }}>Reset</button>
                            <button onClick={handleReset} style={{ ...styles.button, ...styles.cancel }}>Go Back</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#f8f9fa',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        maxWidth: 600,
        margin: '20px auto',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#2c3e50',
    },
    table: {
        width: '100%',
        borderSpacing: '0 10px',
    },
    label: {
        fontWeight: 'bold',
        paddingRight: 10,
        textAlign: 'right',
        verticalAlign: 'middle',
        width: '30%',
    },
    input: {
        width: '100%',
        padding: 8,
        borderRadius: 5,
        border: '1px solid #ccc',
    },
    buttonRow: {
        textAlign: 'center',
        paddingTop: 20,
    },
    button: {
        marginRight: 10,
        padding: '8px 16px',
        borderRadius: 5,
        fontWeight: 'bold',
        cursor: 'pointer',
        border: 'none',
    },
    save: {
        backgroundColor: '#28a745',
        color: 'white',
    },
    reset: {
        backgroundColor: '#ffc107',
        color: 'white',
    },
    cancel: {
        backgroundColor: '#dc3545',
        color: 'white',
    }
};

export default EmpForm;
