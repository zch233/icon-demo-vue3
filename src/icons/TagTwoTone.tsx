// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TagTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagTwoTone';

export interface TagTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TagTwoTone: TagTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TagTwoToneSvg} />
    ;

TagTwoTone.displayName = 'TagTwoTone';

export default FunctionalComponent;