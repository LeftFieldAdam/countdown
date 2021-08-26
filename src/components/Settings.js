import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import DateFnsUtils from '@date-io/date-fns';

import { saveDate, saveTheme } from '../utils/LocalStorage';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import SettingsIcon from '@material-ui/icons/Settings';
import StyleIcon from '@material-ui/icons/Style';
import StarIcon from '@material-ui/icons/Star';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  settingsContainer: {
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',
  },
}));

function Settings({
  currentTargetDate,
  currentTheme,
  availableThemes,
  updateTargetDate,
  updateTheme,
}) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(currentTargetDate);
  const [selectedTheme, setSelectedTheme] = useState(currentTheme);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setSettingsOpen(open);
  };

  const toggleThemePicker = () => {
    setThemePickerOpen(!themePickerOpen);
  };

  const handleDateChange = (date) => {
    updateTargetDate(date);
    setSelectedDate(date);
  };

  const handleThemeChange = (theme) => {
    updateTheme(theme);
    setSelectedTheme(theme);
  };

  const saveSettings = () => {
    saveDate(selectedDate);
    saveTheme(selectedTheme);
    setShowConfirmation(true);
    setTimeout(function () {
      setShowConfirmation(false);
    }, 3000);
  };

  return (
    <div>
      <div className={classes.settingsContainer}>
        <SettingsIcon onClick={toggleDrawer(true)} color="secondary" />
      </div>
      <Drawer
        anchor={'right'}
        open={settingsOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          <ListItem button onClick={toggleThemePicker}>
            <ListItemIcon>
              <StyleIcon />
            </ListItemIcon>
            <ListItemText primary="Countdown Theme" />
            {themePickerOpen ? (
              <ExpandLessIcon color="primary" />
            ) : (
              <ExpandMoreIcon color="primary" />
            )}
          </ListItem>
          <Collapse in={themePickerOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding color="primary">
              {availableThemes.map((theme, index) => (
                <ListItem
                  button
                  className={classes.nested}
                  key={theme.id}
                  onClick={() => {
                    handleThemeChange(theme);
                  }}
                >
                  <ListItemIcon>
                    {theme.id === currentTheme.id ? (
                      <StarIcon />
                    ) : (
                      <StarBorderIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={theme.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
        <Divider />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="dialog"
            format="MM/dd/yyyy"
            margin="dense"
            id="date-picker-inline"
            inputVariant="filled"
            label="Current Target Date"
            style={{ color: 'black' }}
            value={currentTargetDate}
            minDate={new Date()}
            onChange={(date, value) => handleDateChange(value)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <Divider />
        {showConfirmation && (
          <List>
            <ListItem color="success">
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Settings Saved" />
            </ListItem>
          </List>
        )}
        <Button
          onClick={() => {
            saveSettings();
          }}
        >
          Save Settings
        </Button>
      </Drawer>
    </div>
  );
}

export default Settings;
