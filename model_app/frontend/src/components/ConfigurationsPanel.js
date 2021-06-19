import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import { FormGroup } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'rgba(196,196,196,255)',
        margin: '2%',
        borderRadius: '20px',
        justifyContent: 'space-around'
    },
    configurationsHeader: {
        backgroundColor: 'rgba(49,53,56,255)',
        paddingTop: '1%',
        paddingBottom: '1%',
        borderRadius: '5px'
    },
    panelSection: {
        textAlign: 'left',
        paddingTop: "2%",
        width: "30%"
    },
    switchBase: {
        color: "rgba(49,53,56,255)",
        "&.Mui-checked": {
            color: "rgba(49,53,56,255)"
        },
        "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "rgb(102, 252, 241)",
            opacity: '1'
        }
    },
    switchTrack: {
        backgroundColor: "rgba(224,224,224,255)",
        opacity: "1"
    },
    sliderText: {
        color: "black",
        fontSize: "0.8rem",
        paddingLeft: "0",
        alignItems: "bottom"
    },
    switchText: {
        color: "black",
        paddingLeft: "0",
    },
    gridItemRight: {
        textAlign: "right"
    },
    numSelect: {
        textAlign: "center",
        padding: "0px"
    },
}));


function MaskSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        props.configs.maskPercent = newValue;
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
        props.configs.maskPercent = event.target.value === '' ? '' : Number(event.target.value);
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <div >
            <Grid container direction="row" alignItems="center">
                <Grid item xs={6}>
                    <Typography className={classes.sliderText}>
                        Mask-Wearing
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItemRight}>
                    <Input
                        className={classes.numSelect}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
            </Grid>
        </div>
    );
}
function CapacitySlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        props.configs.capacityPercent = newValue;
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
        props.configs.capacityPercent = event.target.value === '' ? '' : Number(event.target.value);
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <div>
            <Grid container direction="row" alignItems="center">
                <Grid item xs={6}>
                    <Typography className={classes.sliderText}>
                        Capacity Restrictions
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItemRight}>
                    <Input
                        className={classes.numSelect}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

function MassSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        props.configs.massPercent = newValue;
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
        props.configs.massPercent = event.target.value === '' ? '' : Number(event.target.value);
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <div>
            <Grid container direction="row" alignItems="center">
                <Grid item xs={6}>
                    <Typography className={classes.sliderText} >
                        Mass Testing
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItemRight}>
                    <Input
                        className={classes.numSelect}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

function StayAtHome(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({    
        stayAtHome: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.configs[event.target.name] = event.target.checked;
    };

    return (
        <FormControlLabel
            control={
                <Switch checked={state.Home} classes={{ track: classes.switchTrack, switchBase: classes.switchBase }} onChange={handleChange} name="stayAtHome" />}
            label="Stay-at-Home Order"
            labelPlacement="start"
        />
    );
}

function TargetedShutdown(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        schoolsShutdown: false,
        restaurantsShutdown: false,
        gymsShutdown: false,
        barsShutdown: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.configs[event.target.name] = event.target.checked;
    };

    return (
        <FormGroup>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={6}>
                    <Typography className={classes.switchText}>
                        Schools
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItemRight}>
                    <Switch checked={state.Schools} classes={{ track: classes.switchTrack, switchBase: classes.switchBase }} onChange={handleChange} name="schoolsShutdown" />   
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.switchText}>
                        Restaurants
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItemRight}>
                    <Switch checked={state.Restaurants} classes={{ track: classes.switchTrack, switchBase: classes.switchBase }} onChange={handleChange} name="restaurantsShutdown" />   
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.switchText}>
                        Gyms
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItemRight}>
                    <Switch checked={state.Gyms} classes={{ track: classes.switchTrack, switchBase: classes.switchBase }} onChange={handleChange} name="gymsShutdown" />   
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.switchText}>
                        Bars
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItemRight}>
                    <Switch checked={state.Bars} classes={{ track: classes.switchTrack, switchBase: classes.switchBase }} onChange={handleChange} name="barsShutdown" />
                </Grid>
            </Grid>
        </FormGroup>
    );
}

function VaccinationSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);
    
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        props.configs.vaccinePercent = newValue;
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
        props.configs.vaccinePercent = Number(event.target.value);
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <div>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={6}>
                    <Typography className={classes.sliderText}>
                        Vaccinated Population
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.gridItemRight}>
                    <Input
                        className={classes.numSelect}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: "number",
                            "aria-labelledby": "input-slider"
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Slider
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

function ConfirmButton(props) {
    const classes = useStyles();
    
    const handleClick = (event) => {
        props.updateConfigs(props.configs);
    };
    return (
        <div>
            <FormControl className={classes.formControl}></FormControl>
            <Button
                variant="contained"
                className={classes.button}
                onClick={handleClick}
            >
                Confirm
      </Button>
        </div>
    );
}

export default function ConfigurationsPanel(props) {
    const classes = useStyles();
    let configs = JSON.parse(JSON.stringify(props.configs)); //Create a deep copy of parent configurations

    return (
        <div className={classes.root}>
            <div className={classes.panelSection}>
                <Typography className={classes.configurationsHeader}>
                    NPI's
                </Typography>
                <MaskSlider configs={configs}/>
                <CapacitySlider configs={configs}/>
                <MassSlider configs={configs}/>
                <StayAtHome configs={configs}/>
            </div>
            <div className={classes.panelSection}>
                <Typography className={classes.configurationsHeader}>
                    Targeted Shutdowns
                </Typography>
                <TargetedShutdown configs={configs}/>
            </div>
            <div className={classes.panelSection}>
                <Typography className={classes.configurationsHeader}>
                    Vaccinations
                </Typography>
                <VaccinationSlider configs={configs}/>
                <ConfirmButton updateConfigs={props.updateConfigs} configs={configs}/>
            </div>
        </div>
    );
}