import React, { useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { UserContext } from "../../../context/UserContext";
import AddLink from "./AddLink";
import InputDetails from "./InputDetails";

const MyLinks = () => {
    const { user, setUser, UpdateUser, UpdateLink, DeleteLink } = useContext(
        UserContext
    );

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(user.links);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        const tempUser = {
            ...user,
            links: items,
        };

        setUser(tempUser);
        UpdateUser(tempUser);
    };

    const handleSave = (data) => {
        if (data.url && data.name) {
            UpdateLink(data);
        }
    };

    const handleDelete = (index) => {
        let tempData = user.links;
        const tempIndex = tempData[index]._id;

        DeleteLink(tempIndex);
    };

    return (
        <div className="admin_my_links__container">
            <AddLink />

            <form className="links-form">
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="user">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {user.links.map(({ _id, url, name }, index) => {
                                    return (
                                        <Draggable
                                            key={_id}
                                            draggableId={_id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    className="form-group"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                >
                                                    <InputDetails
                                                        _id={_id}
                                                        url={url}
                                                        name={name}
                                                        index={index}
                                                        handleDelete={
                                                            handleDelete
                                                        }
                                                        handleSave={handleSave}
                                                        provided={provided}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </form>
        </div>
    );
};

export default MyLinks;
