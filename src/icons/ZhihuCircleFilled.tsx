// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import ZhihuCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ZhihuCircleFilled';

export interface ZhihuCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ZhihuCircleFilled: ZhihuCircleFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={ZhihuCircleFilledSvg} />
    ;

ZhihuCircleFilled.displayName = 'ZhihuCircleFilled';

export default ZhihuCircleFilled;