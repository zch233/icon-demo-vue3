// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import UnderlineOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnderlineOutlined';

export interface UnderlineOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const UnderlineOutlined: UnderlineOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={UnderlineOutlinedSvg} />
    ;

UnderlineOutlined.displayName = 'UnderlineOutlined';

export default FunctionalComponent;