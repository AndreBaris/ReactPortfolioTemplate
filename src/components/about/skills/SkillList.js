import { React } from "react";
import ProgressBar from 'react-animated-progress-bar';
import { info } from "../../../info/Info";

export default function SkillList(props) {
    return info.skills[props.skillTitle].map((skill, index) => <li key={index}>{skill.title}<ProgressBar
    width="400px"
    height="10px"
    rect
    fontColor="gray"
    percentage={skill.percentage}
    rectPadding="1px"
    rectBorderRadius="20px"
    trackPathColor="transparent"
    bgColor="#333333"
    trackBorderColor="grey" /></li>
)
};