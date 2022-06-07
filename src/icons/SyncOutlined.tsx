// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/SyncOutlined';

export interface SyncOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SyncOutlined: SyncOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SyncOutlinedSvg} />
    ;

SyncOutlined.displayName = 'SyncOutlined';

export default FunctionalComponent;