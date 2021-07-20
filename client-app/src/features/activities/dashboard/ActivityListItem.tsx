import React, { useState } from "react";
import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { Button, Item,  Segment,  Icon } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";

interface Props {
    activity: Activity
}

export default function ActivityListItem({ activity }: Props) {
    const { activityStore } = useStore();
    const { loading } = activityStore;

    const [target, setTarget] = useState("");
 
    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        activityStore.deleteActivity(id);
    }

    return (
        <>
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={"/assets/user.png"}>
                                {/* <Image  src={`/assets/categoryImages/${activity.category}.jpg`}></Image> */}
                            </Item.Image>
                            <Item.Content>
                                <Item.Header as={Link} to={`/activities/${activity.id}`}>{activity.title}</Item.Header>
                                <Item.Description>Hosted by Bob</Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>

                </Segment>
                <Segment>
                    <span>
                        <Icon name="clock"></Icon> {activity.date}
                        <Icon name="marker"></Icon> {activity.venue}

                    </span>
                </Segment>
                <Segment secondary>
                    Attendees goes here
                </Segment>
                <Segment clearing>
                    {activity.description}
                    <Button as={Link} to={`/activities/${activity.id}`} floated="right" content="View" color="teal" />
                    <Button
                        name={activity.id}
                        loading={loading && target === activity.id}
                        onClick={(e) => handleActivityDelete(e, activity.id)}
                        floated="right"
                        content="Delete"
                        color="red" />
                </Segment>
            </Segment.Group>


            {/* <Item key={activity.id}>
                <Item.Content>
                    <Item.Header as='a'>{activity.title}</Item.Header>
                    <Item.Meta>{activity.date}</Item.Meta>
                    <Item.Description>
                        <div>{activity.description}</div>
                        <div>{activity.city}, {activity.venue}</div>

                    </Item.Description>
                    <Item.Extra>
                        <Button as={Link} to={`/activities/${activity.id}`} floated="right" content="View" color="blue" />
                        <Button
                            name={activity.id}
                            loading={loading && target === activity.id}
                            onClick={(e) => handleActivityDelete(e, activity.id)}
                            floated="right"
                            content="Delete"
                            color="red" />
                        <Label basic content={activity.category} />

                    </Item.Extra>
                </Item.Content>
            </Item> */}

        </>
    )
}