import React, { useState } from 'react';
import uuid from 'uuid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Input } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const UploadContent = () => {
    const classes = useStyles();
    const [ContentID, setContentID] = useState('')
    const [ContentName, setContentName] = useState('')
    const [PathFile, setPathFile] = useState('')
    const [UserID, setUserID] = useState('')
    const [Description, setDescription] = useState('')
    const [UploadDate, setUploadDate] = useState('')
    const [Tags, setTags] = useState(['first tag', 'second tag', 'third tag'])
    const [ChosenTag, setChosenTag] = useState('');
    const [ChoosenTagsList, setChoosenTagsList] = useState([])

    const PushToTagsList = (e) => {
        if (ChoosenTagsList.length == 4) return;
        setChosenTag(e.target.value)
        const tagslist = ChoosenTagsList
        tagslist.push(ChosenTag)
        setChoosenTagsList(tagslist)
        console.log(ChoosenTagsList)
    }

    const UploadPpt = () => {
        console.log(PathFile)
    }
    const prevent =(e)=>{
        e.preventDefault()
    }

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AssignmentIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Upload Content
        </Typography>
                    <form className={classes.form} noValidate
                    onSubmit={prevent}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="Content Name"
                                    name="ContentName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="ContentName"
                                    label="Content Name"
                                    autoFocus
                                    onChange={(e) => setContentName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="Content Description"
                                    name="ContentDescription"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="ContentDescription"
                                    label="Content Description"
                                    autoFocus
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <label style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Choose tags</label>
                                <Select
                                    labelId="SchoolType"
                                    id="SchoolType"
                                    fullWidth
                                    value={ChosenTag}
                                    required
                                    onChange={PushToTagsList}
                                >
                                    {
                                        Tags.map((tag, index) => <MenuItem key={index} value={tag}>{tag}</MenuItem>)
                                    }
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <label style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>tags</label>
                                <h3
                                    labelId="SchoolType"
                                    id="SchoolType"
                                    fullWidth
                                    value={ChosenTag}
                                    required
                                    onChange={PushToTagsList}
                                >
                                    {
                                        ChoosenTagsList.map((tag, index) => <MenuItem key={index} value={tag}>{tag}</MenuItem>)
                                    }
                                </h3>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <label style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>upload File</label>
                                <Input
                                    variant="outlined"
                                    //accept="*.ppt"
                                    type='file'
                                    required
                                    fullWidth
                                    id="ppt"
                                    autoComplete="ppt"
                                    onChange={(e) => setPathFile(e.target.files[0])}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <button onClick={UploadPpt}>upload</button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );

}

export default UploadContent;