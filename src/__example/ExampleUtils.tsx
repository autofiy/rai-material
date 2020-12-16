import { Button } from "@material-ui/core"
import React from "react"

export function getData(): any {
    return {
        name: 'Ali Faris',
        birthDate: '1993-09-27',
        email: 'test@mail.com',
        phone: '+9647801234567',
        image: "https://miro.medium.com/fit/c/262/262/0*olqwWg7iBo2mlwBd.",

        job: "Software Engineer",
        education: "Computer Science",
        yearsOfExperience: 10,

        githubUrl: "http://github.com",
        linkedinUrl: "http://linkedin.com",
        facebookUrl: "http://facebook.com",
        website: "http://example.com"
    }
}


export function getTitles(): any {
    return {
        name: 'Name',
        birthDate: 'Birth Date',
        email: 'Email',
        phone: 'Phone',
        image: "Image",

        job: "Job Title",
        education: "Education",
        yearsOfExperience: "Year Of Experience",

        githubUrl: "Github",
        linkedinUrl: "LinkedIn",
        facebookUrl: "Facebook",
        website: "Website"
    }
}


export function customValueRenderers(): any {
    return {
        image: (p: any, data: any) => <img alt={p.title} src={data.image} style={{ height: 100 }} />,
        linkedinUrl: (p: any, data: any) => <Button variant="contained" href={data.linkedinUrl} target="_blank">LinkedIn</Button>,
        facebookUrl: (p: any, data: any) => <Button variant="contained" href={data.facebookUrl} target="_blank">Facebook</Button>,
        githubUrl: (p: any, data: any) => <Button variant="contained" href={data.githubUrl} target="_blank">GitHub</Button>,
        website: (p: any, data: any) => <Button variant="contained" href={data.website} target="_blank">Website</Button>,
    }
}