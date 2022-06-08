// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DoubleRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/DoubleRightOutlined';

export interface DoubleRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DoubleRightOutlined: DoubleRightOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DoubleRightOutlinedSvg} />;

DoubleRightOutlined.displayName = 'DoubleRightOutlined';

export default FunctionalComponent;