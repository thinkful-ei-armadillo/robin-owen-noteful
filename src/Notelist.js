import React from "react";
import { Link } from "react-router-dom";
import "./Notelist.css";

export default function Notelist(props) {
	// console.log(props.notes);
	// const variable = props.fid===''? note: note.folderId === props.fId ;
	return (
		<ul className="note">
			{props.notes
				.filter(note => (props.nId ? note.id === props.nId : note))
				.filter(note => (props.fId ? note.folderId === props.fId : note))
				.map((el, index) => {
					return (
						<section className="detail">
							<li>
								<h2>
									<Link to={`/notes/${el.id}`}>{el.name}</Link>
								</h2>
								<p>{el.modified}</p>
								<input type="button" name="deleteNote" value="Delete Note" />
							</li>
							{props.nId ? <p>{el.content}</p> : ""}
						</section>
					);
				})}
		</ul>
	);
}
