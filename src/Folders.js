import React from "react";
import { NavLink } from "react-router-dom";
import "./Folders.css";

export default function Folders(props) {
	let folderNav = {};
	if (!props.nId) {
		folderNav = props.folders.map((el, index) => {
			return (
				<section className="folder">
					<NavLink to={`/folders/${el.id}`}>{el.name}</NavLink>
				</section>
			);
		});
		return folderNav;
	} else {
		const findContent = props.notes.find(el => el.id === props.nId);
		const folderInfo = props.folders.find(el => el.id === findContent.folderId);
		return (
			<section className="navigation">
				<button
					className="back-button"
					onClick={() => {
						props.routeProps.history.goBack();
					}}
				>
					Go Back
				</button>
				<p>{folderInfo.name}</p>
			</section>
		);
	}
}
