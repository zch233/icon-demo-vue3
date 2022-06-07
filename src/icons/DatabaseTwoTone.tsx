// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DatabaseTwoToneSvg from '@ant-design/icons-svg/lib/asn/DatabaseTwoTone';

export interface DatabaseTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DatabaseTwoTone: DatabaseTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DatabaseTwoToneSvg} />
    ;

DatabaseTwoTone.displayName = 'DatabaseTwoTone';

export default FunctionalComponent;