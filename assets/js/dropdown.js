(function($) {
    // Abstratcing the elements and setting some defaults
    var CheckboxDropdown = function(el) {
        var checkBoxDrop = this;
        this.isOpen = false;
        this.$el = $(el);
        this.$label = this.$el.find('.dropdown-label');
        this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
        this.$inputs = this.$el.find('[type="checkbox"]');

        this.onCheckBox();

        // Expands dropdown
        this.$label.on('click', function(e) {
            e.preventDefault();
            checkBoxDrop.toggleOpen();
        });

        // Indicates a change in checkbox
        this.$inputs.on('change', function(e) {
            checkBoxDrop.onCheckBox();
        });
    };

    // Checking and Unchecking 
    CheckboxDropdown.prototype.onCheckBox = function() {
        this.updateStatus();
    };


    // Accumulating the label
    CheckboxDropdown.prototype.updateStatus = function() {
        var checked = this.$el.find(':checked');
        this.areAllChecked = false;

        if (checked.length <= 0) {
            this.$label.html('Select Branch');
        } else if (checked.length === 1) {
            this.$label.html(checked.parent('label').text());
        } else if (checked.length === this.$inputs.length) {
            this.$label.html('All Selected');
        } else {
            this.$label.html(checked.parent('label').text());
        }
    };


    // Expanding and contracting the dropdown
    CheckboxDropdown.prototype.toggleOpen = function(forceOpen) {
        var _this = this;

        if (!this.isOpen || forceOpen) {
            this.isOpen = true;
            this.$el.addClass('on');
            $(document).on('click', function(e) {
                if (!$(e.target).closest('[data-control]').length) {
                    _this.toggleOpen();
                }
            });
        } else {
            this.isOpen = false;
            this.$el.removeClass('on');
            $(document).off('click');
        }
    };

    var checkboxesDropdowns = document.querySelectorAll('[data-control="checkbox-dropdown"]');

    for (var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
        new CheckboxDropdown(checkboxesDropdowns[i]);
    }

})(jQuery);