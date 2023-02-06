import Card from "../../components/card/Card";
import { skills } from "../../constants/constants";
import './skills.css';


const 
div = () => {
  return (
    <div className="app__skills" id="skills">
        <div className="app__skills-heading">
        <h1>Skills</h1>
        <p>My Technical Level</p>
        </div>
        <div className="app__skills-card">
        {skills.map((item, index) => (
          <Card key={item.id}
          icon={item.icon}
          title={item.title}
          info={item.info} />
        ))}
        </div>
    </div>
  )
}

export default 
div