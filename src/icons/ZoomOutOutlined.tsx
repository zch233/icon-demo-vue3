// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ZoomOutOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZoomOutOutlined';

export interface ZoomOutOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ZoomOutOutlined: ZoomOutOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ZoomOutOutlinedSvg} />
    ;

ZoomOutOutlined.displayName = 'ZoomOutOutlined';

export default FunctionalComponent;