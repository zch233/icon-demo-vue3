// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TabletOutlinedSvg from '@ant-design/icons-svg/lib/asn/TabletOutlined';

export interface TabletOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TabletOutlined: TabletOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TabletOutlinedSvg} />
    ;

TabletOutlined.displayName = 'TabletOutlined';

export default FunctionalComponent;