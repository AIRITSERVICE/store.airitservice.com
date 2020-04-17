
import React from "react";
import TeamMember from "./teamMember.js";
import iqb4le from "../images/iqb4le.png";
import "../css/layout/teamMemberList.css";

function TeamMemberList(props) {
	

	return(
		<section className="TeamMemberList">
			<TeamMember 
				name="Iqbal Anggoro"
				jobTitle="Founder"
				description="I'm an independent Front-end Web Developer from Jakarta, Indonesia"
				image={iqb4le}
			/>
		</section>
	)
}

export default TeamMemberList;


