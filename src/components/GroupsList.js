import React from "react";

import DefaultButton from "./DefaultButton";
import CheckBox from "./CheckBox";
import { ResponsiveList, ResponsiveListItem } from "./ResponsiveList";

import styles from "./GroupsList.module.css";

function null_function() {}

function GroupsList({
  groups,
  title = null,
  emitSelected = null_function,
  emitToggleFilter = null_function,
  social = null,
}) {
  if (!groups) {
    return null;
  }

  let projects = [];

  Object.keys(groups).forEach((key) => {
    let items = [];

    for (let index in groups[key]) {
      let group = social.get(groups[key][index]);
      let is_filtered = social.isFiltered(group);

      items.push(
        <ResponsiveListItem key={group.getName()}>
          <DefaultButton
            onClick={() => {
              emitSelected(group);
            }}
            style={{ width: "70%" }}
          >
            {group.getName()}
          </DefaultButton>
          <CheckBox
            onChange={() => {
              emitToggleFilter(group);
            }}
            style={{ width: "20%" }}
            checked={is_filtered}
          />
        </ResponsiveListItem>
      );
    }

    let project = social.get(key);
    let is_filtered = social.isFiltered(project);

    projects.push(
      <div className={styles.project} key={project.getName()}>
        <div className={styles.projectHeader}>
          <DefaultButton
            style={{ width: "75%" }}
            onClick={() => {
              emitSelected(project);
            }}
          >
            {project.getName()}
          </DefaultButton>
          <CheckBox
            onChange={() => {
              emitToggleFilter(project);
            }}
            style={{ width: "20%" }}
            checked={is_filtered}
          />
        </div>
        <div className={styles.projectBody}>
          <ResponsiveList style={{ minWidth: "100%" }}>{items}</ResponsiveList>
        </div>
      </div>
    );
  });

  if (title) {
    return (
      <div>
        <div className={styles.title}>{title}</div>
        {projects}
      </div>
    );
  } else {
    return projects;
  }
}

export default GroupsList;
