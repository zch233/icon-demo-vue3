// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import HddOutlinedSvg from '@ant-design/icons-svg/lib/asn/HddOutlined';

export interface HddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const HddOutlined: HddOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={HddOutlinedSvg} />;

HddOutlined.displayName = 'HddOutlined';

export default FunctionalComponent;