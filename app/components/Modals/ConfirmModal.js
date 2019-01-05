import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const styles = () => ({
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  }
});

class ConfirmModal extends React.PureComponent {
  static propTypes = {
    intl: intlShape,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    values: PropTypes.object,
    cancel: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  render() {
    return (
      <Dialog
        maxWidth="xs"
        open={this.props.isOpen}
        onClose={this.props.onCancel}
      >
        <DialogTitle>
          <FormattedMessage id={this.props.title} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormattedMessage id={this.props.text} values={this.props.values} />
          </DialogContentText>
        </DialogContent>
        <DialogActions classes={{ root: this.props.classes.actions }}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.onCancel}
          >
            <FormattedMessage id={this.props.cancel} />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.props.onSubmit}
          >
            <FormattedMessage id={this.props.submit} />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ConfirmModal);
