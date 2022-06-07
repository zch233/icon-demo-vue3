// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileGifOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileGifOutlined';

export interface FileGifOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileGifOutlined: FileGifOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileGifOutlinedSvg} />
    ;

FileGifOutlined.displayName = 'FileGifOutlined';

export default FunctionalComponent;