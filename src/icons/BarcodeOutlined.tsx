// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BarcodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarcodeOutlined';

export interface BarcodeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BarcodeOutlined: BarcodeOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={BarcodeOutlinedSvg} />;

BarcodeOutlined.displayName = 'BarcodeOutlined';

export default FunctionalComponent;