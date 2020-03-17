import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FieldArrayElement from '../FieldArrayElement';
import { fieldArrayMeta, fieldArrayButtonBsStyle } from '../meta';
import Tooltip from '../../../ui/Tooltip';
import DropdownButton from '../../../ui/DropdownButton';
import FormField from '../../FormField';

/**
 * Component that renders a section field array using the provided innerComponent prop as its elements.
 */
class SectionFieldArray extends Component {
  static propTypes = {
    /**
     * Fields object passed by the React Form
     */
    fields: PropTypes.object.isRequired,
    /**
     * Input field label
     */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * Help text used to describe the field's purpose
     */
    help: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * Whether the field is disabled or not.
     */
    disabled: PropTypes.bool,
    /**
     * Metadata object that is passed by the React Form
     */
    meta: PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
      ]),
    }),
    /**
     * The element/text that will be displayed when no element exist
     */
    emptyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * The component that will be rendered as an element
     */
    innerComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    /**
     * This label is used in the default renderKey prop. It is the prefix used in the element name
     */
    labelDefault: PropTypes.string,
    /**
     * The tooltip that will be displayed when hovering over the add button
     */
    addTooltip: PropTypes.string,
    /**
     * If elements are able to be minimized or not
     */
    minimizable: PropTypes.bool,
    /**
     * If a minimizable component should be initially minimized or not
     */
    initiallyMinimized: PropTypes.bool,
    /**
     * If elements are able to be duplicated or not
     */
    duplicable: PropTypes.bool,
    /**
     * A function that receives the value object and its index and returns an element to be displayed as the element
     * header
     */
    // eslint-disable-next-line react/require-default-props
    renderLabel: PropTypes.func,
    /**
     * The initial field object that should be used when onAdd is not defined.
     */
    initialFieldValue: PropTypes.object,
    /**
     * Callback function that transforms and adds a new element. If not defined, initialFieldValue will be used
     * instead. Callback receives no argument and should return the new object object.
     */
    onAdd: PropTypes.func,
    /**
     * Callback function that transforms the current element into a duplicated one and adds it. Callback receives
     * the current object as argument and should return the new object.
     */
    onDuplicate: PropTypes.func,
  };

  static defaultProps = {
    help: null,
    label: null,
    disabled: false,
    emptyMessage: null,
    meta: { touched: false, error: [] },
    labelDefault: 'New',
    addTooltip: 'Click to add',
    minimizable: true,
    initiallyMinimized: true,
    duplicable: false,
    initialFieldValue: {},
    onAdd: null,
    onDuplicate: null,
  };

  state = {
    firstRender: true,
    // eslint-disable-next-line react/destructuring-assignment
    touched: this.props.meta.touched || false,
  };

  componentDidMount() {
    this.setState({ firstRender: false });
  }

  renderField(field, index) {
    const
      {
        fields,
        innerComponent: InnerComponent,
        innerProps,
        labelDefault,
        renderKey = (value, idx) => idx,
        renderLabel = (value, idx) => `${labelDefault} ${idx + 1}`,
        variant,
        minimizable,
        initiallyMinimized,
        duplicable,
        onDuplicate,
        onRemove,
      } = this.props;

    const {
      firstRender,
    } = this.state;

    // eslint-disable-next-line no-underscore-dangle
    const isFieldsFromReduxForm = fields_ => fields_._isFieldArray;
    const value = isFieldsFromReduxForm(fields) ? fields.get(index) : fields.value;
    const key = renderKey(value, index);
    const label = renderLabel(value, index);

    const content = (
      <InnerComponent
        {...innerProps}
        index={index}
        field={field}
      />
    );

    return (
      <FieldArrayElement
        key={key}
        label={label}
        variant={variant}
        initiallyMinimized={initiallyMinimized && firstRender}
        minimizable={minimizable}
        duplicable={duplicable}
        onRemove={() => {
          if (onRemove) onRemove(index);
          fields.remove(index);
        }}
        onDuplicate={() => {
          const currentValue = fields.get(index);
          const item = onDuplicate ? onDuplicate(currentValue) : currentValue;
          fields.push(item);
        }}
      >
        {content}
      </FieldArrayElement>
    );
  }

  render() {
    const
      {
        label,
        fields,
        meta,
        help,
        disabled,
        initialFieldValue,
        addTooltip,
        addChoices,
        onAdd,
        emptyMessage,
      } = this.props;
    const { touched } = this.state;

    const buttonBsStyle = fieldArrayButtonBsStyle(meta);
    const pushItem = (selected) => {
      const item = onAdd ? onAdd(selected) : initialFieldValue;
      fields.push(item);
      this.setState({ touched: true });
    };

    const fieldArray = fields.map((field, index) => this.renderField(field, index));

    return (
      <FormField
        label={(
          <span>
            {label}
          </span>
        )}
        help={help}
        meta={fieldArrayMeta({
          ...meta,
          touched,
        })}
      >
        {fieldArray}

        {emptyMessage && fields.length === 0 && (
          <div style={{ textAlign: 'center', margin: '10px 0px' }}>{emptyMessage}</div>
        )}
        <Tooltip text={addTooltip} placement="top">
          <DropdownButton
            className="text-center"
            title={<FontAwesomeIcon icon="plus" />}
            style={{ display: 'block', marginTop: 10 }}
            variant={buttonBsStyle}
            disabled={disabled || (addChoices && addChoices.length === 0)}
            onSelect={pushItem}
          >
            {addChoices}
          </DropdownButton>
        </Tooltip>
      </FormField>
    );
  }
}

export default SectionFieldArray;
