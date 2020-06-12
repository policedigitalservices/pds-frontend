'use strict';

(function () {

    /* Allow css to know if js is present OR not. (IE 11 doesnt support replace) */
    document.body.classList.remove('no-js');
    document.body.classList.add('with-js');

    /* 
        Only run this if on the stepped page
     */
    var stepped = document.getElementById('stepped');
    if (stepped) {

        // Ensure a valid hash is used on both intial render, and if hash updated.

        var ensureValidHash = function ensureValidHash() {
            var validSteppedPagesIds = Array.from(stepped.querySelectorAll(".stepped__page")).map(function (steppedPage) {
                return '#' + steppedPage.id;
            });

            if (!validSteppedPagesIds.includes(location.hash)) {
                location.hash = validSteppedPagesIds[0];
            }
        };

        ;
        window.addEventListener('hashchange', ensureValidHash);
        ensureValidHash();

        /* If there is an invalid field inside a stepped page then we want to select it 
        so replace locations hash with the fields parent step. */
        var fieldsWithErrors = document.querySelectorAll('.input-validation-error');
        for (var errorIndex = 0; errorIndex < fieldsWithErrors.length; errorIndex++) {
            // Get the error
            var elemenentToCheck = fieldsWithErrors[errorIndex];
            var closestSteppedPage = elemenentToCheck.closest('.stepped__page');
            if (closestSteppedPage) {
                location.hash = closestSteppedPage.id;
                break;
            }
        }
    }

    var sendMessageForm = document.querySelector('.form--send-message');
    if (sendMessageForm) {
        (function () {

            // Updates the confirmation for the groups field.

            var updateGroupsConfirmation = function updateGroupsConfirmation() {
                // The field to check
                var groupsField = document.getElementById('Input_Groups');
                // The field to update
                var confirmationField = document.getElementById('Groups_Confirmation');
                // Build and display the selected groups
                var selectedGroups = Array.from(groupsField.options).filter(function (option) {
                    return option.selected;
                }).map(function (selectedOption) {
                    return '<li>' + selectedOption.text + '</li>';
                });
                confirmationField.innerHTML = '<ul>' + (selectedGroups.length ? selectedGroups : ["<li>No groups selected</li>"]).join('') + '</ul>';
            };

            // Updates the confirmation for the messages options field.

            var updateMessageOptions = function updateMessageOptions() {
                // The field to update
                var confirmationField = document.getElementById('ResponseOptions_Confirmation');
                // Build and update the list of selected items
                var responseListItems = Array.from(document.querySelectorAll('.form-control.response-option')).filter(function (option) {
                    return option.value.trim() !== '';
                }).map(function (option) {
                    return '<li>' + option.value.trim() + '</li>';
                });
                if (!responseListItems.length) {
                    responseListItems = ["<li>No Options added</li>"];
                }

                confirmationField.innerHTML = '<ul>' + responseListItems.join('') + '</ul>';
            };

            // Updates the confirmation for both of the simple text fields

            var updateSimpleTextFields = function updateSimpleTextFields() {
                // Call the update function for both the subject and message field.
                ["Input_Subject", "Input_Message"].map(function (id) {
                    return document.getElementById(id);
                }).forEach(updateSimpleTextField);
            }
            // Update confirmation for a single passed in text field
            ;

            var updateSimpleTextField = function updateSimpleTextField(blurredInput) {
                // The confirmation field
                var confirmationField = document.getElementById(blurredInput.id + '_Confirmation');
                if (confirmationField) {
                    confirmationField.innerText = blurredInput.value;
                }
            };

            // Handles changes to form fields that should update confirmation.

            var updateConfirmationListener = function updateConfirmationListener(blurredEvent) {
                // N.B. As we have to click out to get to confirmation page blur should be fine.
                var blurredInput = blurredEvent.target;

                // Routes off to different update functions.
                if (blurredInput.id == "Input_Groups") {
                    updateGroupsConfirmation();
                } else if (Array.from(blurredInput.classList).includes('response-option')) {
                    updateMessageOptions();
                } else {
                    updateSimpleTextField(blurredInput);
                }
            };

            // Find the first non empty option i.e. the last one that needs showing

            var findRepopulateIndex = function findRepopulateIndex() {
                for (var i = optionFormGroups.length - 1; i > 0; i--) {
                    var inputToCheck = optionFormGroups[i].querySelector('input.response-option');
                    if (inputToCheck.value.trim() !== '') {
                        return i + 1;
                    }
                }
                // Always show atleast the first option.
                return 1;
            }

            // Add the classes to to the response options on intial load.
            ;

            var addInitialClasses = function addInitialClasses(optionFormGroup, loopIndex, repopulateIndex) {

                if (repopulateIndex === 1 && loopIndex === 1) {
                    // Only one item to show, and this is it, so add 'only' and 'last'
                    optionFormGroup.classList.add(onlyResponseClass);
                    optionFormGroup.classList.add(lastVisibleClass);
                } else if (loopIndex < repopulateIndex) {
                    // No special classes no op
                } else if (loopIndex === repopulateIndex) {
                        // Showing the last item, buts its not the only one
                        optionFormGroup.classList.add(lastVisibleClass);
                    } else {
                        // This item will be past last to be displayed, so hide
                        optionFormGroup.classList.add(hiddenClass);
                    }

                // Mark the last item so we know not to show add button
                if (loopIndex === maxItems) {
                    optionFormGroup.classList.add(lastPossibleResponseClass);
                }
            }

            // Add the remove item
            ;

            var addRemoveButton = function addRemoveButton(optionInput, loopIndex) {
                var removeButton = document.createElement('button');
                removeButton.classList.add('btn');
                removeButton.classList.add('btn--remove-response');
                removeButton.classList.add('btn-danger');
                removeButton.innerText = "-";
                removeButton.addEventListener('click', function (e) {
                    e.preventDefault();
                    // Remove any gaps if an item is deleted
                    copyItemsForwardOnDelete(loopIndex);
                    hideLastItemAndAddOnlyClassIfRequired();
                    // Update the confirmation for the messages
                    updateMessageOptions();
                });
                optionInput.insertAdjacentElement('afterend', removeButton);
            };

            var addAddButton = function addAddButton(optionFormGroup, optionInput, loopIndex) {
                // We never want a add button on last item
                if (loopIndex !== maxItems) {
                    var addButton = document.createElement('button');
                    addButton.classList.add('btn');
                    addButton.classList.add('btn--add-response');
                    addButton.classList.add('btn-success');
                    addButton.innerText = "+";
                    optionInput.insertAdjacentElement('afterend', addButton);
                    addButton.addEventListener('click', function (e) {
                        e.preventDefault();
                        var toShow = optionsList.querySelector('.' + hiddenClass);
                        if (toShow) {
                            // Show the first hidden item, and mark it as the last visible.
                            toShow.classList.remove(hiddenClass);
                            toShow.classList.add(lastVisibleClass);
                            // This item will no longer be the last visible, or 'only'
                            optionFormGroup.classList.remove(lastVisibleClass);
                            optionFormGroup.classList.remove(onlyResponseClass);
                        }
                    });
                }
            }

            // If a 'middle' option is deleted, copy forward later items to take its place
            ;

            var copyItemsForwardOnDelete = function copyItemsForwardOnDelete(deletedIndex) {
                var actualIndex = deletedIndex - 1;

                if (deletedIndex === maxItems) {
                    // Is last possible option so special case
                    var currentItem = optionFormGroups[actualIndex];
                    var currentItemInput = currentItem.querySelector('input.response-option');
                    currentItemInput.value = "";
                    return;
                }

                // Loops through all items, or (until comes across a hidden item)
                for (var i = actualIndex; i < maxItems - 1; i++) {
                    var currentItem = optionFormGroups[i];
                    var currentItemInput = currentItem.querySelector('input.response-option');
                    var nextItem = optionFormGroups[i + 1];

                    if (nextItem.classList.contains(hiddenClass)) {
                        // Rest of options are hidden - no item to copy upwards, so reset text and break out
                        currentItemInput.value = "";
                        break;
                    } else {
                        // Still items to copy upwards. Copy and keep going.
                        var nextItemInput = nextItem.querySelector('input.response-option');
                        currentItemInput.value = nextItemInput.value;
                    }
                }

                // Empty the last item whatever
                var lastItemInput = optionFormGroups[maxItems - 1].querySelector('input.response-option');
                lastItemInput.value = "";
            }

            /* Works backwards through the list to hide last visible item, 
            and adds special class to the 'new' last visible item. */
            ;

            var hideLastItemAndAddOnlyClassIfRequired = function hideLastItemAndAddOnlyClassIfRequired() {
                for (var i = optionFormGroups.length - 1; i > 0; i--) {
                    var loopItem = optionFormGroups[i];
                    if (loopItem.classList.contains(hiddenClass)) {
                        // Already hidden - skip to next
                        continue;
                    } else {
                        // Was visible - so hide now
                        loopItem.classList.add(hiddenClass);
                        if (i === 1) {
                            // There will no only be one item. Give it the only class
                            optionFormGroups[0].classList.add(onlyResponseClass);
                        }
                        // Make the item before the last the visible class
                        optionFormGroups[i - 1].classList.add(lastVisibleClass);
                        // Nothing else to do so break out.
                        break;
                    }
                }
            };

            (function wireUpClientSideValidation() {
                $('.validate-stepped').click(function (e) {
                    var allInputsOnPage = $(this).closest('.stepped__page').find('.form-control');
                    var allValid = $.map(allInputsOnPage, function (input) {
                        return $(input).valid();
                    }).every(function (e) {
                        return e;
                    });

                    if (!allValid) {
                        e.preventDefault();
                    }
                });
            })();;;;;

            (function wireUpChangeListeners() {
                var formInputs = sendMessageForm.querySelectorAll(".form-control");

                formInputs.forEach(function (formInput) {
                    formInput.addEventListener('blur', updateConfirmationListener);
                });
            })();

            // These needs to be called initially to get the initial values/ no selection messages.
            updateMessageOptions();
            updateGroupsConfirmation();
            updateSimpleTextFields();

            // The list of the response options added/ available to add
            var optionsList = document.querySelector('.response-options-list');
            var optionFormGroups = optionsList.querySelectorAll('.form-group');

            // The classes used to style/ mark response options in different states.
            var hiddenClass = 'response-option-form-group--hidden';
            var lastVisibleClass = 'response-option-form-group--last-visible';
            var onlyResponseClass = "response-option-form-group--only";
            var lastPossibleResponseClass = "response-option-form-group--last";

            var maxItems = optionFormGroups.length;

            // Find the last options that needs to be displayed i.e. not empty
            var repopulateIndex = findRepopulateIndex();

            // Initialise the option form groups.
            optionFormGroups.forEach(function (option, idx) {
                var loopIndex = idx + 1;
                addInitialClasses(option, loopIndex, repopulateIndex);
                var optionInput = option.querySelector('input.response-option');
                addAddButton(option, optionInput, loopIndex);
                addRemoveButton(optionInput, loopIndex);
            });
        })();
    }
})();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6L0dpdC9Db3VyaWVyL0FzcG9saWNlLlN0cmF0ZWdpY0RpZ2l0YWxTZXJ2aWNlcy5Db3VyaWVyL2Zyb250ZW5kX3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFDLEFBQUMsQ0FBQSxZQUFZOzs7QUFHVixZQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEMsWUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7OztBQUt2QyxRQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25ELFFBQUksT0FBTyxFQUFFOzs7O1lBR0EsZUFBZSxHQUF4QixTQUFTLGVBQWUsR0FBRztBQUN2QixnQkFBTSxvQkFBb0IsR0FDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUNqRCxHQUFHLENBQUMsVUFBQSxXQUFXOzZCQUFRLFdBQVcsQ0FBQyxFQUFFO2FBQUUsQ0FBQyxDQUFDOztBQUVsRCxnQkFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDL0Msd0JBQVEsQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0M7U0FDSjs7QUFBQSxTQUFDO0FBQ0YsY0FBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztBQUN2RCx1QkFBZSxFQUFFLENBQUM7Ozs7QUFJbEIsWUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUM5RSxhQUFLLElBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFF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bGUiOiJzdGRvdXQiLCJzb3VyY2VzQ29udGVudCI6WyLvu78oZnVuY3Rpb24gKCkgeyAgIFxyXG5cclxuICAgIC8qIEFsbG93IGNzcyB0byBrbm93IGlmIGpzIGlzIHByZXNlbnQgT1Igbm90LiAoSUUgMTEgZG9lc250IHN1cHBvcnQgcmVwbGFjZSkgKi9cclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd2l0aC1qcycpO1xyXG5cclxuICAgIC8qIFxyXG4gICAgICAgIE9ubHkgcnVuIHRoaXMgaWYgb24gdGhlIHN0ZXBwZWQgcGFnZVxyXG4gICAgICovXHJcbiAgICBjb25zdCBzdGVwcGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXBwZWQnKTtcclxuICAgIGlmIChzdGVwcGVkKSB7XHJcblxyXG4gICAgICAgIC8vIEVuc3VyZSBhIHZhbGlkIGhhc2ggaXMgdXNlZCBvbiBib3RoIGludGlhbCByZW5kZXIsIGFuZCBpZiBoYXNoIHVwZGF0ZWQuXHJcbiAgICAgICAgZnVuY3Rpb24gZW5zdXJlVmFsaWRIYXNoKCkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZFN0ZXBwZWRQYWdlc0lkcyA9XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHN0ZXBwZWQucXVlcnlTZWxlY3RvckFsbChcIi5zdGVwcGVkX19wYWdlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoc3RlcHBlZFBhZ2UgPT4gYCMke3N0ZXBwZWRQYWdlLmlkfWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF2YWxpZFN0ZXBwZWRQYWdlc0lkcy5pbmNsdWRlcyhsb2NhdGlvbi5oYXNoKSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaGFzaCA9IHZhbGlkU3RlcHBlZFBhZ2VzSWRzWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGVuc3VyZVZhbGlkSGFzaCk7XHJcbiAgICAgICAgZW5zdXJlVmFsaWRIYXNoKCk7XHJcblxyXG4gICAgICAgIC8qIElmIHRoZXJlIGlzIGFuIGludmFsaWQgZmllbGQgaW5zaWRlIGEgc3RlcHBlZCBwYWdlIHRoZW4gd2Ugd2FudCB0byBzZWxlY3QgaXQgXHJcbiAgICAgICAgc28gcmVwbGFjZSBsb2NhdGlvbnMgaGFzaCB3aXRoIHRoZSBmaWVsZHMgcGFyZW50IHN0ZXAuICovXHJcbiAgICAgICAgY29uc3QgZmllbGRzV2l0aEVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC12YWxpZGF0aW9uLWVycm9yJyk7XHJcbiAgICAgICAgZm9yIChsZXQgZXJyb3JJbmRleCA9IDA7IGVycm9ySW5kZXggPCBmaWVsZHNXaXRoRXJyb3JzLmxlbmd0aDsgZXJyb3JJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgZXJyb3JcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVuZW50VG9DaGVjayA9IGZpZWxkc1dpdGhFcnJvcnNbZXJyb3JJbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RTdGVwcGVkUGFnZSA9IGVsZW1lbmVudFRvQ2hlY2suY2xvc2VzdCgnLnN0ZXBwZWRfX3BhZ2UnKTtcclxuICAgICAgICAgICAgaWYgKGNsb3Nlc3RTdGVwcGVkUGFnZSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaGFzaCA9IGNsb3Nlc3RTdGVwcGVkUGFnZS5pZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgIH0gICBcclxuXHJcbiAgICBjb25zdCBzZW5kTWVzc2FnZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS0tc2VuZC1tZXNzYWdlJyk7XHJcbiAgICBpZiAoc2VuZE1lc3NhZ2VGb3JtKSB7ICAgXHJcblxyXG4gICAgICAgIChmdW5jdGlvbiB3aXJlVXBDbGllbnRTaWRlVmFsaWRhdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLnZhbGlkYXRlLXN0ZXBwZWQnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsSW5wdXRzT25QYWdlID1cclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuc3RlcHBlZF9fcGFnZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuZm9ybS1jb250cm9sJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxWYWxpZCA9ICQubWFwKGFsbElucHV0c09uUGFnZSwgZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoaW5wdXQpLnZhbGlkKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5ldmVyeShlID0+IGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghYWxsVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pKCk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZXMgdGhlIGNvbmZpcm1hdGlvbiBmb3IgdGhlIGdyb3VwcyBmaWVsZC5cclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVHcm91cHNDb25maXJtYXRpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIFRoZSBmaWVsZCB0byBjaGVja1xyXG4gICAgICAgICAgICBjb25zdCBncm91cHNGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJbnB1dF9Hcm91cHMnKTtcclxuICAgICAgICAgICAgLy8gVGhlIGZpZWxkIHRvIHVwZGF0ZVxyXG4gICAgICAgICAgICBjb25zdCBjb25maXJtYXRpb25GaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdHcm91cHNfQ29uZmlybWF0aW9uJyk7XHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIGFuZCBkaXNwbGF5IHRoZSBzZWxlY3RlZCBncm91cHNcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRHcm91cHMgPVxyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShncm91cHNGaWVsZC5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZClcclxuICAgICAgICAgICAgICAgICAgICAubWFwKHNlbGVjdGVkT3B0aW9uID0+IGA8bGk+JHtzZWxlY3RlZE9wdGlvbi50ZXh0fTwvbGk+YCk7XHJcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbkZpZWxkLmlubmVySFRNTCA9IGA8dWw+JHsoc2VsZWN0ZWRHcm91cHMubGVuZ3RoID8gc2VsZWN0ZWRHcm91cHMgOiBbXCI8bGk+Tm8gZ3JvdXBzIHNlbGVjdGVkPC9saT5cIl0pLmpvaW4oJycpfTwvdWw+YDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBVcGRhdGVzIHRoZSBjb25maXJtYXRpb24gZm9yIHRoZSBtZXNzYWdlcyBvcHRpb25zIGZpZWxkLlxyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2VPcHRpb25zKCkge1xyXG4gICAgICAgICAgICAvLyBUaGUgZmllbGQgdG8gdXBkYXRlXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbkZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1Jlc3BvbnNlT3B0aW9uc19Db25maXJtYXRpb24nKTtcclxuICAgICAgICAgICAgLy8gQnVpbGQgYW5kIHVwZGF0ZSB0aGUgbGlzdCBvZiBzZWxlY3RlZCBpdGVtc1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2VMaXN0SXRlbXMgPVxyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jb250cm9sLnJlc3BvbnNlLW9wdGlvbicpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi52YWx1ZS50cmltKCkgIT09ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAob3B0aW9uID0+IGA8bGk+JHtvcHRpb24udmFsdWUudHJpbSgpfTwvbGk+YCk7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2VMaXN0SXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZUxpc3RJdGVtcyA9IFtcIjxsaT5ObyBPcHRpb25zIGFkZGVkPC9saT5cIl07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbkZpZWxkLmlubmVySFRNTCA9IGA8dWw+JHtyZXNwb25zZUxpc3RJdGVtcy5qb2luKCcnKX08L3VsPmA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBVcGRhdGVzIHRoZSBjb25maXJtYXRpb24gZm9yIGJvdGggb2YgdGhlIHNpbXBsZSB0ZXh0IGZpZWxkc1xyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNpbXBsZVRleHRGaWVsZHMoKSB7XHJcbiAgICAgICAgICAgIC8vIENhbGwgdGhlIHVwZGF0ZSBmdW5jdGlvbiBmb3IgYm90aCB0aGUgc3ViamVjdCBhbmQgbWVzc2FnZSBmaWVsZC5cclxuICAgICAgICAgICAgW1wiSW5wdXRfU3ViamVjdFwiLCBcIklucHV0X01lc3NhZ2VcIl1cclxuICAgICAgICAgICAgICAgIC5tYXAoKGlkKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCh1cGRhdGVTaW1wbGVUZXh0RmllbGQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFVwZGF0ZSBjb25maXJtYXRpb24gZm9yIGEgc2luZ2xlIHBhc3NlZCBpbiB0ZXh0IGZpZWxkXHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU2ltcGxlVGV4dEZpZWxkKGJsdXJyZWRJbnB1dCkge1xyXG4gICAgICAgICAgICAvLyBUaGUgY29uZmlybWF0aW9uIGZpZWxkXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbkZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Ymx1cnJlZElucHV0LmlkfV9Db25maXJtYXRpb25gKTtcclxuICAgICAgICAgICAgaWYgKGNvbmZpcm1hdGlvbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb25GaWVsZC5pbm5lclRleHQgPSBibHVycmVkSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBIYW5kbGVzIGNoYW5nZXMgdG8gZm9ybSBmaWVsZHMgdGhhdCBzaG91bGQgdXBkYXRlIGNvbmZpcm1hdGlvbi5cclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVDb25maXJtYXRpb25MaXN0ZW5lcihibHVycmVkRXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gTi5CLiBBcyB3ZSBoYXZlIHRvIGNsaWNrIG91dCB0byBnZXQgdG8gY29uZmlybWF0aW9uIHBhZ2UgYmx1ciBzaG91bGQgYmUgZmluZS5cclxuICAgICAgICAgICAgY29uc3QgYmx1cnJlZElucHV0ID0gYmx1cnJlZEV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIFJvdXRlcyBvZmYgdG8gZGlmZmVyZW50IHVwZGF0ZSBmdW5jdGlvbnMuXHJcbiAgICAgICAgICAgIGlmIChibHVycmVkSW5wdXQuaWQgPT0gXCJJbnB1dF9Hcm91cHNcIikge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlR3JvdXBzQ29uZmlybWF0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuZnJvbShibHVycmVkSW5wdXQuY2xhc3NMaXN0KS5pbmNsdWRlcygncmVzcG9uc2Utb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2VPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTaW1wbGVUZXh0RmllbGQoYmx1cnJlZElucHV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIChmdW5jdGlvbiB3aXJlVXBDaGFuZ2VMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtSW5wdXRzID0gc2VuZE1lc3NhZ2VGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1jb250cm9sXCIpO1xyXG5cclxuICAgICAgICAgICAgZm9ybUlucHV0cy5mb3JFYWNoKGZvcm1JbnB1dCA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHVwZGF0ZUNvbmZpcm1hdGlvbkxpc3RlbmVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgLy8gVGhlc2UgbmVlZHMgdG8gYmUgY2FsbGVkIGluaXRpYWxseSB0byBnZXQgdGhlIGluaXRpYWwgdmFsdWVzLyBubyBzZWxlY3Rpb24gbWVzc2FnZXMuXHJcbiAgICAgICAgdXBkYXRlTWVzc2FnZU9wdGlvbnMoKTtcclxuICAgICAgICB1cGRhdGVHcm91cHNDb25maXJtYXRpb24oKTtcclxuICAgICAgICB1cGRhdGVTaW1wbGVUZXh0RmllbGRzKCk7XHJcblxyXG4gICAgICAgIC8vIFRoZSBsaXN0IG9mIHRoZSByZXNwb25zZSBvcHRpb25zIGFkZGVkLyBhdmFpbGFibGUgdG8gYWRkXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2Utb3B0aW9ucy1saXN0Jyk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRm9ybUdyb3VwcyA9IG9wdGlvbnNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWdyb3VwJyk7XHJcblxyXG4gICAgICAgIC8vIFRoZSBjbGFzc2VzIHVzZWQgdG8gc3R5bGUvIG1hcmsgcmVzcG9uc2Ugb3B0aW9ucyBpbiBkaWZmZXJlbnQgc3RhdGVzLlxyXG4gICAgICAgIGNvbnN0IGhpZGRlbkNsYXNzID0gJ3Jlc3BvbnNlLW9wdGlvbi1mb3JtLWdyb3VwLS1oaWRkZW4nO1xyXG4gICAgICAgIGNvbnN0IGxhc3RWaXNpYmxlQ2xhc3MgPSAncmVzcG9uc2Utb3B0aW9uLWZvcm0tZ3JvdXAtLWxhc3QtdmlzaWJsZSc7XHJcbiAgICAgICAgY29uc3Qgb25seVJlc3BvbnNlQ2xhc3MgPSBcInJlc3BvbnNlLW9wdGlvbi1mb3JtLWdyb3VwLS1vbmx5XCI7XHJcbiAgICAgICAgY29uc3QgbGFzdFBvc3NpYmxlUmVzcG9uc2VDbGFzcyA9IFwicmVzcG9uc2Utb3B0aW9uLWZvcm0tZ3JvdXAtLWxhc3RcIjtcclxuXHJcbiAgICAgICAgY29uc3QgbWF4SXRlbXMgPSBvcHRpb25Gb3JtR3JvdXBzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8gRmluZCB0aGUgbGFzdCBvcHRpb25zIHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkIGkuZS4gbm90IGVtcHR5XHJcbiAgICAgICAgY29uc3QgcmVwb3B1bGF0ZUluZGV4ID0gZmluZFJlcG9wdWxhdGVJbmRleCgpO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXNlIHRoZSBvcHRpb24gZm9ybSBncm91cHMuXHJcbiAgICAgICAgb3B0aW9uRm9ybUdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb24sIGlkeCkge1xyXG4gICAgICAgICAgICBjb25zdCBsb29wSW5kZXggPSBpZHggKyAxO1xyXG4gICAgICAgICAgICBhZGRJbml0aWFsQ2xhc3NlcyhvcHRpb24sIGxvb3BJbmRleCwgcmVwb3B1bGF0ZUluZGV4KTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSW5wdXQgPSBvcHRpb24ucXVlcnlTZWxlY3RvcignaW5wdXQucmVzcG9uc2Utb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIGFkZEFkZEJ1dHRvbihvcHRpb24sIG9wdGlvbklucHV0LCBsb29wSW5kZXgpO1xyXG4gICAgICAgICAgICBhZGRSZW1vdmVCdXR0b24ob3B0aW9uSW5wdXQsIGxvb3BJbmRleCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEZpbmQgdGhlIGZpcnN0IG5vbiBlbXB0eSBvcHRpb24gaS5lLiB0aGUgbGFzdCBvbmUgdGhhdCBuZWVkcyBzaG93aW5nXHJcbiAgICAgICAgZnVuY3Rpb24gZmluZFJlcG9wdWxhdGVJbmRleCgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IChvcHRpb25Gb3JtR3JvdXBzLmxlbmd0aCAtIDEpOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFRvQ2hlY2sgPSBvcHRpb25Gb3JtR3JvdXBzW2ldLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LnJlc3BvbnNlLW9wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0VG9DaGVjay52YWx1ZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEFsd2F5cyBzaG93IGF0bGVhc3QgdGhlIGZpcnN0IG9wdGlvbi5cclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgdGhlIGNsYXNzZXMgdG8gdG8gdGhlIHJlc3BvbnNlIG9wdGlvbnMgb24gaW50aWFsIGxvYWQuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkSW5pdGlhbENsYXNzZXMob3B0aW9uRm9ybUdyb3VwLCBsb29wSW5kZXgsIHJlcG9wdWxhdGVJbmRleCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlcG9wdWxhdGVJbmRleCA9PT0gMSAmJiBsb29wSW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9ubHkgb25lIGl0ZW0gdG8gc2hvdywgYW5kIHRoaXMgaXMgaXQsIHNvIGFkZCAnb25seScgYW5kICdsYXN0J1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uRm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQob25seVJlc3BvbnNlQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uRm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQobGFzdFZpc2libGVDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobG9vcEluZGV4IDwgcmVwb3B1bGF0ZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBObyBzcGVjaWFsIGNsYXNzZXMgbm8gb3BcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChsb29wSW5kZXggPT09IHJlcG9wdWxhdGVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgLy8gU2hvd2luZyB0aGUgbGFzdCBpdGVtLCBidXRzIGl0cyBub3QgdGhlIG9ubHkgb25lXHJcbiAgICAgICAgICAgICAgICBvcHRpb25Gb3JtR3JvdXAuY2xhc3NMaXN0LmFkZChsYXN0VmlzaWJsZUNsYXNzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXRlbSB3aWxsIGJlIHBhc3QgbGFzdCB0byBiZSBkaXNwbGF5ZWQsIHNvIGhpZGVcclxuICAgICAgICAgICAgICAgIG9wdGlvbkZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKGhpZGRlbkNsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWFyayB0aGUgbGFzdCBpdGVtIHNvIHdlIGtub3cgbm90IHRvIHNob3cgYWRkIGJ1dHRvblxyXG4gICAgICAgICAgICBpZiAobG9vcEluZGV4ID09PSBtYXhJdGVtcykge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uRm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQobGFzdFBvc3NpYmxlUmVzcG9uc2VDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCB0aGUgcmVtb3ZlIGl0ZW1cclxuICAgICAgICBmdW5jdGlvbiBhZGRSZW1vdmVCdXR0b24ob3B0aW9uSW5wdXQsIGxvb3BJbmRleCkge1xyXG4gICAgICAgICAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gICAgICAgICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLS1yZW1vdmUtcmVzcG9uc2UnKTtcclxuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1kYW5nZXInKTtcclxuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmlubmVyVGV4dCA9IFwiLVwiO1xyXG4gICAgICAgICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFueSBnYXBzIGlmIGFuIGl0ZW0gaXMgZGVsZXRlZFxyXG4gICAgICAgICAgICAgICAgY29weUl0ZW1zRm9yd2FyZE9uRGVsZXRlKGxvb3BJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBoaWRlTGFzdEl0ZW1BbmRBZGRPbmx5Q2xhc3NJZlJlcXVpcmVkKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGNvbmZpcm1hdGlvbiBmb3IgdGhlIG1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVNZXNzYWdlT3B0aW9ucygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgb3B0aW9uSW5wdXQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIHJlbW92ZUJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRBZGRCdXR0b24ob3B0aW9uRm9ybUdyb3VwLCBvcHRpb25JbnB1dCwgbG9vcEluZGV4KSB7XHJcbiAgICAgICAgICAgIC8vIFdlIG5ldmVyIHdhbnQgYSBhZGQgYnV0dG9uIG9uIGxhc3QgaXRlbVxyXG4gICAgICAgICAgICBpZiAobG9vcEluZGV4ICE9PSBtYXhJdGVtcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICAgICAgICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLS1hZGQtcmVzcG9uc2UnKTtcclxuICAgICAgICAgICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9IFwiK1wiO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uSW5wdXQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGFkZEJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b1Nob3cgPSBvcHRpb25zTGlzdC5xdWVyeVNlbGVjdG9yKGAuJHtoaWRkZW5DbGFzc31gKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgdGhlIGZpcnN0IGhpZGRlbiBpdGVtLCBhbmQgbWFyayBpdCBhcyB0aGUgbGFzdCB2aXNpYmxlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b1Nob3cuY2xhc3NMaXN0LnJlbW92ZShoaWRkZW5DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvU2hvdy5jbGFzc0xpc3QuYWRkKGxhc3RWaXNpYmxlQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGl0ZW0gd2lsbCBubyBsb25nZXIgYmUgdGhlIGxhc3QgdmlzaWJsZSwgb3IgJ29ubHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkZvcm1Hcm91cC5jbGFzc0xpc3QucmVtb3ZlKGxhc3RWaXNpYmxlQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25Gb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZShvbmx5UmVzcG9uc2VDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGEgJ21pZGRsZScgb3B0aW9uIGlzIGRlbGV0ZWQsIGNvcHkgZm9yd2FyZCBsYXRlciBpdGVtcyB0byB0YWtlIGl0cyBwbGFjZVxyXG4gICAgICAgIGZ1bmN0aW9uIGNvcHlJdGVtc0ZvcndhcmRPbkRlbGV0ZShkZWxldGVkSW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3QgYWN0dWFsSW5kZXggPSBkZWxldGVkSW5kZXggLSAxO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRlbGV0ZWRJbmRleCA9PT0gbWF4SXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIElzIGxhc3QgcG9zc2libGUgb3B0aW9uIHNvIHNwZWNpYWwgY2FzZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSBvcHRpb25Gb3JtR3JvdXBzW2FjdHVhbEluZGV4XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtSW5wdXQgPSBjdXJyZW50SXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dC5yZXNwb25zZS1vcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBMb29wcyB0aHJvdWdoIGFsbCBpdGVtcywgb3IgKHVudGlsIGNvbWVzIGFjcm9zcyBhIGhpZGRlbiBpdGVtKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gYWN0dWFsSW5kZXg7IChpIDwgbWF4SXRlbXMgLSAxKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9IG9wdGlvbkZvcm1Hcm91cHNbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbUlucHV0ID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXQucmVzcG9uc2Utb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0SXRlbSA9IG9wdGlvbkZvcm1Hcm91cHNbaSArIDFdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChuZXh0SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoaGlkZGVuQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzdCBvZiBvcHRpb25zIGFyZSBoaWRkZW4gLSBubyBpdGVtIHRvIGNvcHkgdXB3YXJkcywgc28gcmVzZXQgdGV4dCBhbmQgYnJlYWsgb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW1JbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0aWxsIGl0ZW1zIHRvIGNvcHkgdXB3YXJkcy4gQ29weSBhbmQga2VlcCBnb2luZy5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0SXRlbUlucHV0ID0gbmV4dEl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXQucmVzcG9uc2Utb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW1JbnB1dC52YWx1ZSA9IG5leHRJdGVtSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEVtcHR5IHRoZSBsYXN0IGl0ZW0gd2hhdGV2ZXJcclxuICAgICAgICAgICAgY29uc3QgbGFzdEl0ZW1JbnB1dCA9IG9wdGlvbkZvcm1Hcm91cHNbbWF4SXRlbXMgLSAxXS5xdWVyeVNlbGVjdG9yKCdpbnB1dC5yZXNwb25zZS1vcHRpb24nKTtcclxuICAgICAgICAgICAgbGFzdEl0ZW1JbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBXb3JrcyBiYWNrd2FyZHMgdGhyb3VnaCB0aGUgbGlzdCB0byBoaWRlIGxhc3QgdmlzaWJsZSBpdGVtLCBcclxuICAgICAgICBhbmQgYWRkcyBzcGVjaWFsIGNsYXNzIHRvIHRoZSAnbmV3JyBsYXN0IHZpc2libGUgaXRlbS4gKi9cclxuICAgICAgICBmdW5jdGlvbiBoaWRlTGFzdEl0ZW1BbmRBZGRPbmx5Q2xhc3NJZlJlcXVpcmVkKCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gKG9wdGlvbkZvcm1Hcm91cHMubGVuZ3RoIC0gMSk7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvb3BJdGVtID0gb3B0aW9uRm9ybUdyb3Vwc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChsb29wSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoaGlkZGVuQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxyZWFkeSBoaWRkZW4gLSBza2lwIHRvIG5leHRcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2FzIHZpc2libGUgLSBzbyBoaWRlIG5vd1xyXG4gICAgICAgICAgICAgICAgICAgIGxvb3BJdGVtLmNsYXNzTGlzdC5hZGQoaGlkZGVuQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXJlIHdpbGwgbm8gb25seSBiZSBvbmUgaXRlbS4gR2l2ZSBpdCB0aGUgb25seSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25Gb3JtR3JvdXBzWzBdLmNsYXNzTGlzdC5hZGQob25seVJlc3BvbnNlQ2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHRoZSBpdGVtIGJlZm9yZSB0aGUgbGFzdCB0aGUgdmlzaWJsZSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkZvcm1Hcm91cHNbaSAtIDFdLmNsYXNzTGlzdC5hZGQobGFzdFZpc2libGVDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90aGluZyBlbHNlIHRvIGRvIHNvIGJyZWFrIG91dC5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpKSJdfQ==
