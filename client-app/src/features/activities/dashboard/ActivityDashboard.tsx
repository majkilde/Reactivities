import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityFilters from "./ActivityFilters";
import ActivityList from "./ActivityList";

export default observer(function ActivityDashboard() {

    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;

    useEffect(() => {
        if (activityRegistry.size <= 1) loadActivities();
    }, [loadActivities, activityRegistry.size]);

    if (activityStore.loadingInitial) return (<LoadingComponent content="Loading activities" />)

    return (
        <Grid>
            <Grid.Column width='12'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width="4">
              <ActivityFilters />
            </Grid.Column>
        </Grid>
    )
})