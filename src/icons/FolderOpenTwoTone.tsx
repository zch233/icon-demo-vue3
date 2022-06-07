// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FolderOpenTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderOpenTwoTone';

export interface FolderOpenTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FolderOpenTwoTone: FolderOpenTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FolderOpenTwoToneSvg} />
    ;

FolderOpenTwoTone.displayName = 'FolderOpenTwoTone';

export default FunctionalComponent;