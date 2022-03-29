import React from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import { cloneDeep } from "lodash-es";

import nodeList from './nodesList';
import { Classes, Tree } from "@blueprintjs/core";
import { Example } from "@blueprintjs/docs-theme";

function forEachNode(nodes, callback) {
    if (nodes === undefined) {
        return;
    }

    for (const node of nodes) {
        callback(node);
        forEachNode(node.childNodes, callback);
    }
}

function forNodeAtPath(nodes, path, callback) {
    callback(Tree.nodeFromPath(path, nodes));
}

function treeExampleReducer(state, action) {
    switch (action.type) {
        case "DESELECT_ALL":
            const newState1 = cloneDeep(state);
            forEachNode(newState1, node => (node.isSelected = false));
            return newState1;
        case "SET_IS_EXPANDED":
            const newState2 = cloneDeep(state);
            forNodeAtPath(newState2, action.payload.path, node => (node.isExpanded = action.payload.isExpanded));
            return newState2;
        case "SET_IS_SELECTED":
            const newState3 = cloneDeep(state);
            forNodeAtPath(newState3, action.payload.path, node => (node.isSelected = action.payload.isSelected));
            return newState3;
        default:
            return state;
    }
}

export default function SiteMapTreeBox(props) {
    let [nodes, dispatch] = React.useReducer(treeExampleReducer, nodeList);

    let handleNodeClick = React.useCallback(
        (node, nodePath, e) => {
            const originallySelected = node.isSelected;
            if (!e.shiftKey) {
                dispatch({ type: "DESELECT_ALL" });
            }
            dispatch({
                payload: { path: nodePath, isSelected: originallySelected == null ? true : !originallySelected },
                type: "SET_IS_SELECTED",
            });
        },
        [],
    );

    let handleNodeCollapse = React.useCallback((_node, nodePath) => {
        dispatch({
            payload: { path: nodePath, isExpanded: false },
            type: "SET_IS_EXPANDED",
        });
    }, []);

    let handleNodeExpand = React.useCallback((_node, nodePath) => {
        dispatch({
            payload: { path: nodePath, isExpanded: true },
            type: "SET_IS_EXPANDED",
        });
    }, []);

    return (
        <Example options={false} {...props}>
            <Tree
                contents={nodes}
                onNodeClick={handleNodeClick}
                onNodeCollapse={handleNodeCollapse}
                onNodeExpand={handleNodeExpand}
                className={Classes.ELEVATION_0}
            />
        </Example>
    );
};
