import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import SVGIcon from '../MaterialUI/SVGIcon';
import A from '../A';
import logo from '../MaterialUI/prolong.png';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'block',
    width: '100%',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class PrimaryAppBar extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton>
            <A href="https://www.facebook.com/goprolong">
              <SVGIcon name="facebook" width={35} />
            </A>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton>
            <A href="https://www.instagram.com/goprolong/">
              <SVGIcon name="instagram" width={35} />
            </A>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton>
            <A href="https://twitter.com/go_prolong">
              <SVGIcon name="twitter" width={35} />
            </A>
          </IconButton>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton>
            <A href="https://www.youtube.com/channel/UC6UmLgeWWr-9hUz5BuXG2Zg/featured">
              <SVGIcon name="youtube" width={35} />
            </A>
          </IconButton>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            {/* <Typography className={classes.title} variant="h6" noWrap>
              Prolong
            </Typography> */}
            <A>
              <img
                src={logo}
                className={classes.title}
                alt="Prolong Super Lubricants - Logo"
              />
            </A>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton>
                <A href="https://www.facebook.com/goprolong">
                  <SVGIcon name="facebook" width={35} />
                </A>
              </IconButton>
              <IconButton>
                <A href="https://www.instagram.com/goprolong/">
                  <SVGIcon name="instagram" width={35} />
                </A>
              </IconButton>
              <IconButton>
                <A href="https://twitter.com/go_prolong">
                  <SVGIcon name="twitter" width={35} />
                </A>
              </IconButton>
              <IconButton>
                <A href="https://www.youtube.com/channel/UC6UmLgeWWr-9hUz5BuXG2Zg/featured">
                  <SVGIcon name="youtube" width={35} />
                </A>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton onClick={this.handleMobileMenuOpen}>
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimaryAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimaryAppBar);
