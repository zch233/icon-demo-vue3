// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import RedditCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RedditCircleFilled';

export interface RedditCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RedditCircleFilled: RedditCircleFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={RedditCircleFilledSvg} />
    ;

RedditCircleFilled.displayName = 'RedditCircleFilled';

export default RedditCircleFilled;