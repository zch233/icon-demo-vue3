// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PrinterTwoToneSvg from '@ant-design/icons-svg/lib/asn/PrinterTwoTone';

export interface PrinterTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PrinterTwoTone: PrinterTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PrinterTwoToneSvg} />;

PrinterTwoTone.displayName = 'PrinterTwoTone';

export default FunctionalComponent;