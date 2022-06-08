// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import LinkedinOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinkedinOutlined';

export interface LinkedinOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const LinkedinOutlined: LinkedinOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={LinkedinOutlinedSvg} />;

LinkedinOutlined.displayName = 'LinkedinOutlined';

export default LinkedinOutlined;