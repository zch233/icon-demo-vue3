// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RedditCircleFilledSvg from '@ant-design/icons-svg/es/asn/RedditCircleFilled';

export interface RedditCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRedditCircleFilled: RedditCircleFilledIconType = (props, context) => (
    <Icon name='RedditCircleFilled' {...{ ...props, ...context.attrs }} icon={RedditCircleFilledSvg} />
);

IconRedditCircleFilled.displayName = 'IconRedditCircleFilled';

export default IconRedditCircleFilled;