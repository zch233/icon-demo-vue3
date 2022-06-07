// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TabletTwoToneSvg from '@ant-design/icons-svg/lib/asn/TabletTwoTone';

export interface TabletTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TabletTwoTone: TabletTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TabletTwoToneSvg} />
    ;

TabletTwoTone.displayName = 'TabletTwoTone';

export default FunctionalComponent;