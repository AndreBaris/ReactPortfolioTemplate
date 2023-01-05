import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import SkillList from "./skills/SkillList";

export default function About() {
    const firstName = info.firstName.toLowerCase()
    const lastName = info.lastName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{lastName} $</span> cat
                about{firstName} </p>
            <p><span style={{ color: info.baseColor }}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }
    function skillsText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{lastName} $</span> cd skills/tools
            </p>
            <p><span style={{ color: info.baseColor }}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ color: info.baseColor }}> languages that i love</p>
            <ul className={Style.skills}>
                <SkillList skillTitle='languages' />
            </ul>
            <p style={{ color: info.baseColor }}> Framworks/Libraries that i know</p>
            <ul className={Style.skills}>
                <SkillList skillTitle='frameworksLibraries' />
            </ul>
            <p style={{ color: info.baseColor }}> Concepts that i've studied</p>
            <ul className={Style.skills}>
                {info.skills.concepts.map((concept, index) => <li key={index}>{concept}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Subjects that i've studied</p>
            <ul className={Style.skills}>
                <SkillList skillTitle='subjects' />
            </ul>
            <p style={{ color: info.baseColor }}> Tools that i work with</p>
            <ul className={Style.skills}>
                {info.skills.tools.map((tools, index) => <li key={index}>{tools}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{lastName} $</span> cd
                hobbies/interests</p>
            <p><span style={{ color: info.baseColor }}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()} />
            <Terminal text={skillsText()} />
            <Terminal text={miscText()} />
        </Box>
    )
}