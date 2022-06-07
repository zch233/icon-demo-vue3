// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import WeiboCircleFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboCircleFilled';

export interface WeiboCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const WeiboCircleFilled: WeiboCircleFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={WeiboCircleFilledSvg} />
    ;

WeiboCircleFilled.displayName = 'WeiboCircleFilled';

export default WeiboCircleFilled;