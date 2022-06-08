// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DollarCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/DollarCircleOutlined';

export interface DollarCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DollarCircleOutlined: DollarCircleOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DollarCircleOutlinedSvg} />;

DollarCircleOutlined.displayName = 'DollarCircleOutlined';

export default DollarCircleOutlined;