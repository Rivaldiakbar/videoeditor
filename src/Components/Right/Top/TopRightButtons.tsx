import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, Grid, IconButton, Theme } from "@material-ui/core";
import { useActions, useAppState } from '../../../Overmind/OvermindHelper';
import SvgHelper from '../../../Helpers/SvgHelper';
import { OurIcons } from '../../../Others/OurIcons';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {
        iconButton: {
            padding: 8
        }
    }
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const TopRightButtons: React.FC<Props> = (props) => {
    const { setPrimaryColor, showColorPickerDialog } = useActions()
    const { } = useAppState()

    const classes = useStyles();

    return <Grid container direction='row' justifyContent='flex-end' item xs={4}>
        {/*
            PLEASE, DON'T CHANGE THIS GITHUB URL.
            ( https://github.com/p32929/p32929.github.io/ )
        */}
        <IconButton size='small' target="_blank" href='https://github.com/p32929/p32929.github.io/'>
            <SvgHelper
                styles={{ padding: 8 }}
                path={OurIcons.githubIcon}
                size={20} />
        </IconButton>

        {/*
            YOU MAY USE THE SOURCE CODE HOWEVER YOU WANT, BUT PLEASE,
            KEEP THE GITHUB-ICON & the GITHUB-URL under the icon UNCHANGED,
            SO THAT OTHERS CAN ALSO BENIFIT FROM THE ORIGINAL REPOSITORY.
            THANKS... :)
        */}

        <IconButton size='small' onClick={() => {
            showColorPickerDialog(true)
        }}>
            <SvgHelper
                styles={{ padding: 8 }}
                path={OurIcons.palette}
                size={20} />
        </IconButton>
    </Grid>

}

export default TopRightButtons;