// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PrinterTwoToneSvg from '@ant-design/icons-svg/es/asn/PrinterTwoTone';

export interface PrinterTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPrinterTwoTone: PrinterTwoToneIconType = (props, context) => (
    <Icon name='PrinterTwoTone' {...{ ...props, ...context.attrs }} icon={PrinterTwoToneSvg} />
);

IconPrinterTwoTone.displayName = 'IconPrinterTwoTone';

export default IconPrinterTwoTone;