import React, { createContext, useState } from 'react'
export const contextdata = createContext();
const ContextApi = ({ children }) => {
    const [name, setName] = useState('');
    const [linkdin, setLinkdin] = useState('');
    const [github, setGithub] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(null);
    const [description, setDescription] = useState('');
    const [college, setCollege] = useState('');
    const [startdate, setStartDate] = useState('');
    const [enddate,setEndDate]=useState('');
    const [cgpa, setCgpa] = useState('');
    //experience
    const [companyname, setCompanyName] = useState('');
    const [duration, setDuration] = useState('')
    const [positionstart, setPositionStart] = useState('');
    const [positionend,setPositionEnd]=useState('')
    const [positiondescription, setPositionDescription] = useState('');
    //project
    const [peojectname1, setProjectName1] = useState('');
    const [projectgiyurl1, setProjectGitUrl1] = useState('');
    const [projectstartdate1, setProjectStartDate1] = useState('');
    const [Projectdescription1, setProjectDescription1] = useState('')

    const [peojectname2, setProjectName2] = useState('');
    const [projectgiyurl2, setProjectGitUrl2] = useState('');
    const [projectstartdate2, setProjectStartDate2] = useState('');
    const [Projectdescription2, setProjectDescription2] = useState('')

    const [peojectname3, setProjectName3] = useState('');
    const [projectgiyurl3, setProjectGitUrl3] = useState('');
    const [projectstartdate3, setProjectStartDate3] = useState('');
    const [Projectdescription3, setProjectDescription3] = useState('')
    //skills
    const [skill1, setSkill1] = useState('')
    const [skill2, setSkill2] = useState('')
    const [skill3, setSkill3] = useState('')
    const [skill4, setSkill4] = useState('')
    const [skill5, setSkill5] = useState('')
    const [skill6, setSkill6] = useState('')


    //languages
    const [language1, setLanguage1] = useState('');
    const [language2, setLanguage2] = useState('');
    //intrest

    const [intrest1, setIntrest1] = useState('');
    const [intrest2, setIntrest2] = useState('');
    const [intrest3, setIntrest3] = useState('');
    const [intrest4, setIntrest4] = useState('');

    //certificates
    const [certificate1, setcertificate1] = useState('');
    const [certificate2, setcertificate2] = useState('');
    const [certificate3, setcertificate3] = useState('');
    const [certificate4, setcertificate4] = useState('');
    const value = {
        name, setName,
        linkdin, setLinkdin,
        github, setGithub,
        email, setEmail,
        phone, setPhone,
        description, setDescription,
        college, setCollege,
        startdate, setStartDate,
        enddate,setEndDate,
        cgpa, setCgpa,
        companyname, setCompanyName,
        positionstart, setPositionStart,
        positionend, setPositionEnd,
        positiondescription, setPositionDescription,
        peojectname1, setProjectName1,
        projectgiyurl1, setProjectGitUrl1,
        projectstartdate1, setProjectStartDate1,
        Projectdescription1, setProjectDescription1,
        peojectname2, setProjectName2,
        projectgiyurl2, setProjectGitUrl2,
        projectstartdate2, setProjectStartDate2,
        Projectdescription2, setProjectDescription2,
        peojectname3, setProjectName3,
        projectgiyurl3, setProjectGitUrl3,
        projectstartdate3, setProjectStartDate3,
        Projectdescription3, setProjectDescription3,
        skill1, setSkill1,
        skill2, setSkill2,
        skill3, setSkill3,
        skill4, setSkill4,
        skill5, setSkill5,
        skill6, setSkill6,
        language1, setLanguage1,
        language2, setLanguage2,
        intrest1, setIntrest1,
        intrest2, setIntrest2,
        intrest3, setIntrest3,
        intrest4, setIntrest4,
       certificate1, setcertificate1,
       certificate2, setcertificate2,
       certificate3, setcertificate3,
       certificate4, setcertificate4

    }
    return (
        <div>
            <contextdata.Provider value={value}>
                {children}
            </contextdata.Provider>

        </div>
    )
}

export default ContextApi