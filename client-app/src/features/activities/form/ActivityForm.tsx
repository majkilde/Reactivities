import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity | undefined;
    formClose: () => void;
    createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({ activity: selectedActivity, formClose, createOrEdit }: Props) {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    function handleSubmit() {
        console.log("SUBMIT");
        console.log(activity);
        createOrEdit(activity);
    }

    function handleEvent(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

    const [activity, setActivity] = useState(initialState);

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Input placeholder="Title" value={activity.title} name="title" onChange={handleEvent} />
                <Form.TextArea placeholder="Description" value={activity.description} name="description" onChange={handleEvent} />
                <Form.Input placeholder="Cateogry" value={activity.category} name="category" onChange={handleEvent} />
                <Form.Input placeholder="Date" value={activity.date} name="date" onChange={handleEvent} />
                <Form.Input placeholder="City" value={activity.city} name="city" onChange={handleEvent} />
                <Form.Input placeholder="Venue" value={activity.venue} name="venue" onChange={handleEvent} />
                <Button floated="right" positive type="submit" content="Submit" />
                <Button onClick={formClose} floated="right" type="button" content="Cancel" />
            </Form>
        </Segment>
    )
}