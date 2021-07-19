import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityForm() {

    const { activityStore } = useStore();
    const { selectedActivity } = activityStore;

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
        
        activity.id 
            ?         activityStore.updateActivity(activity)
            :         activityStore.createActivity(activity)
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
                <Form.Input type="date" placeholder="Date" value={activity.date} name="date" onChange={handleEvent} />
                <Form.Input placeholder="City" value={activity.city} name="city" onChange={handleEvent} />
                <Form.Input placeholder="Venue" value={activity.venue} name="venue" onChange={handleEvent} />
                <Button loading={activityStore.loading} floated="right" positive type="submit" content="Submit" />
                <Button onClick={activityStore.closeForm} floated="right" type="button" content="Cancel" />
            </Form>
        </Segment>
    )
})