import { Dialog } from '@headlessui/react';
import React from 'react';
import PropTypes from 'prop-types';
import { BUTTON_VARIANT } from '@/constants/button';
import Card from '../Card';
import Button from '../Button';

export default function ConfirmationDialog({
  open,
  onClose,
  children,
  onConfirm,
  onCancel,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className='relative z-50'
    >
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <Dialog.Panel>
          <Card className='w-[577px] relative'>
            <div className='flex flex-col gap-24'>
              {children}

              <div className='flex self-end gap-2'>
                <Button
                  label='Cancel'
                  variant={BUTTON_VARIANT.SECONDARY}
                  onClick={onCancel}
                />
                <Button
                  label='Confirm'
                  onClick={onConfirm}
                />
              </div>
            </div>
          </Card>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
