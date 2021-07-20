import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from 'uuid';

export default observer(function ActivityForm() {
    const history = useHistory();

    const { activityStore } = useStore();
    const { id } = useParams<{ id: string }>();


    const [activity, setActivity] = useState({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) activityStore.loadActivity(id).then(activity => setActivity(activity!))
    }, [activityStore, id]);

    if (activityStore.loadingInitial) return (<LoadingComponent />);



    function handleSubmit() {

        if (activity.id.length === 0) {
            let newActivity = { ...activity, id: uuid() };

            activityStore.createActivity(activity).then(() => history.push(`/activities/${newActivity.id}`));

        } else {
            activityStore.updateActivity(activity).then(() => history.push(`/activities/${activity.id}`));
        }
    }

    function handleEvent(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }



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
                <Button as={Link} to="/activities" floated="right" type="button" content="Cancel" />
            </Form>
        </Segment>
    )
})