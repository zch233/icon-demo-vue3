// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FolderAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderAddTwoTone';

export interface FolderAddTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FolderAddTwoTone: FolderAddTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FolderAddTwoToneSvg} />
    ;

FolderAddTwoTone.displayName = 'FolderAddTwoTone';

export default FunctionalComponent;