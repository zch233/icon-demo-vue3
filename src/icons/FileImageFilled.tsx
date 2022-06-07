// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileImageFilledSvg from '@ant-design/icons-svg/lib/asn/FileImageFilled';

export interface FileImageFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileImageFilled: FileImageFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileImageFilledSvg} />
    ;

FileImageFilled.displayName = 'FileImageFilled';

export default FunctionalComponent;