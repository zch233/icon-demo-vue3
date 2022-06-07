// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ReloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReloadOutlined';

export interface ReloadOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ReloadOutlined: ReloadOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ReloadOutlinedSvg} />
    ;

ReloadOutlined.displayName = 'ReloadOutlined';

export default FunctionalComponent;