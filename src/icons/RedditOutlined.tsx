// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RedditOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedditOutlined';

export interface RedditOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RedditOutlined: RedditOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={RedditOutlinedSvg} />;

RedditOutlined.displayName = 'RedditOutlined';

export default RedditOutlined;