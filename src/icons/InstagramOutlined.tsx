// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import InstagramOutlinedSvg from '@ant-design/icons-svg/lib/asn/InstagramOutlined';

export interface InstagramOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const InstagramOutlined: InstagramOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={InstagramOutlinedSvg} />;

InstagramOutlined.displayName = 'InstagramOutlined';

export default FunctionalComponent;